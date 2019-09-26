/**
 * Represents a CIE 1931 XY coordinate pair.
 */
class XYPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const Red = new XYPoint(0.675, 0.322);
const Lime = new XYPoint(0.4091, 0.518);
const Blue = new XYPoint(0.167, 0.04);

/**
 * Parses a valid hex color string and returns the Red RGB integer value.
 */
function hexToRed(hex: string): number {
  return parseInt(hex.substring(0, 2), 16);
}

/**
 * Parses a valid hex color string and returns the Green RGB integer value.
 */
function hexToGreen(hex: string): number {
  return parseInt(hex.substring(2, 4), 16);
}

/**
 * Parses a valid hex color string and returns the Blue RGB integer value.
 */
function hexToBlue(hex: string): number {
  return parseInt(hex.substring(4, 6), 16);
}

/**
 * Converts a valid hex color string to an RGB array.
 */
function hexToRGB(hex: string): number[] {
  return [hexToRed(hex), hexToGreen(hex), hexToBlue(hex)];
}

/**
 * Converts an RGB component to a hex string.
 */
function componentToHex(component: number): string {
  const hex: string = component.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

/**
 * Converts RGB color components to a valid hex color string.
 */
function rgbToHex(red: number, green: number, blue: number): string {
  return componentToHex(red) + componentToHex(green) + componentToHex(blue);
}

/**
 * Generates a random number between 'from' and 'to'.
 */
function randomFromInterval(from: number, to: number): number {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

/**
 * Return a random Integer in the range of 0 to 255,
 * representing an RGB color value.
 */
function randomRGBValue(): number {
  return randomFromInterval(0, 255);
}

/**
 * Returns the cross product of two XYPoints.
 */
function crossProduct(p1: XYPoint, p2: XYPoint): number {
  return p1.x * p2.y - p1.y * p2.x;
}

/**
 * Check if the provided XYPoint can be recreated by a Hue lamp.
 */
function checkPointInLampsReach(point: XYPoint): boolean {
  const v1: XYPoint = new XYPoint(Lime.x - Red.x, Lime.y - Red.y);
  const v2: XYPoint = new XYPoint(Blue.x - Red.x, Blue.y - Red.y);

  const q: XYPoint = new XYPoint(point.x - Red.x, point.y - Red.y);

  const s: number = crossProduct(q, v2) / crossProduct(v1, v2);
  const t: number = crossProduct(v1, q) / crossProduct(v1, v2);

  return s >= 0.0 && t >= 0.0 && s + t <= 1.0;
}

/**
 * Find the closest point on a line. This point will be reproducible by a Hue lamp.
 */
function getClosestPointToLine(A: XYPoint, B: XYPoint, P: XYPoint): XYPoint {
  const AP: XYPoint = new XYPoint(P.x - A.x, P.y - A.y);
  const AB: XYPoint = new XYPoint(B.x - A.x, B.y - A.y);
  const ab2: number = AB.x * AB.x + AB.y * AB.y;
  const apAb: number = AP.x * AB.x + AP.y * AB.y;
  let t: number = apAb / ab2;

  if (t < 0.0) {
    t = 0.0;
  } else if (t > 1.0) {
    t = 1.0;
  }

  return new XYPoint(A.x + AB.x * t, A.y + AB.y * t);
}

/**
 * Returns the distance between two XYPoints.
 */
function getDistanceBetweenTwoPoints(one: XYPoint, two: XYPoint): number {
  const dx: number = one.x - two.x; // horizontal difference
  const dy: number = one.y - two.y; // vertical difference

  return Math.sqrt(dx * dx + dy * dy);
}

function getClosestPointToPoint(point: XYPoint): XYPoint {
  // Color is unreproducible, find the closest point on each line in the CIE 1931 'triangle'.
  const pAB: XYPoint = getClosestPointToLine(Red, Lime, point);
  const pAC: XYPoint = getClosestPointToLine(Blue, Red, point);
  const pBC: XYPoint = getClosestPointToLine(Lime, Blue, point);

  // Get the distances per point and see which point is closer to our Point.
  const dAB: number = getDistanceBetweenTwoPoints(point, pAB);
  const dAC: number = getDistanceBetweenTwoPoints(point, pAC);
  const dBC: number = getDistanceBetweenTwoPoints(point, pBC);

  let lowest: number = dAB;
  let closestPoint: XYPoint = pAB;

  if (dAC < lowest) {
    lowest = dAC;
    closestPoint = pAC;
  }

  if (dBC < lowest) {
    lowest = dBC;
    closestPoint = pBC;
  }

  return closestPoint;
}

/**
 * Returns an XYPoint object containing the closest available CIE 1931
 * coordinates based on the RGB input values.
 */
function getXYPointFromRGB(red: number, green: number, blue: number): XYPoint {
  const r = red > 0.04045 ? Math.pow((red + 0.055) / (1.0 + 0.055), 2.4) : red / 12.92;
  const g = green > 0.04045 ? Math.pow((green + 0.055) / (1.0 + 0.055), 2.4) : green / 12.92;
  const b = blue > 0.04045 ? Math.pow((blue + 0.055) / (1.0 + 0.055), 2.4) : blue / 12.92;

  const X = r * 0.4360747 + g * 0.3850649 + b * 0.0930804;
  const Y = r * 0.2225045 + g * 0.7168786 + b * 0.0406169;
  const Z = r * 0.0139322 + g * 0.0971045 + b * 0.7141733;

  let cx = X / (X + Y + Z);
  let cy = Y / (X + Y + Z);

  cx = isNaN(cx) ? 0.0 : cx;
  cy = isNaN(cy) ? 0.0 : cy;

  // Check if the given XY value is within the colourreach of our lamps.
  const xyPoint = new XYPoint(cx, cy);
  const inReachOfLamps = checkPointInLampsReach(xyPoint);

  if (!inReachOfLamps) {
    const closestPoint = getClosestPointToPoint(xyPoint);
    cx = closestPoint.x;
    cy = closestPoint.y;
  }

  return new XYPoint(cx, cy);
}

/**
 * Returns a rgb array for given x, y values. Not actually an inverse of
 * getXYPointFromRGB. Implementation of the instructions found on the
 * Philips Hue iOS SDK docs: http://goo.gl/kWKXKl
 */
export function getRGBFromXYAndBrightness(x: number, y: number, bri: number) {
  let xyPoint = new XYPoint(x, y);

  if (bri === undefined) {
    bri = 1;
  }

  // Check if the xy value is within the color gamut of the lamp.
  // If not continue with step 2, otherwise step 3.
  // We do this to calculate the most accurate color the given light can actually do.
  if (!checkPointInLampsReach(xyPoint)) {
    // Calculate the closest point on the color gamut triangle
    // and use that as xy value See step 6 of color to xy.
    xyPoint = getClosestPointToPoint(xyPoint);
  }

  // Calculate XYZ values Convert using the following formulas:
  const Y = bri;
  const X = (Y / xyPoint.y) * xyPoint.x;
  const Z = (Y / xyPoint.y) * (1 - xyPoint.x - xyPoint.y);

  // Convert to RGB using Wide RGB D65 conversion.
  let rgb = [X * 1.612 - Y * 0.203 - Z * 0.302, -X * 0.509 + Y * 1.412 + Z * 0.066, X * 0.026 - Y * 0.072 + Z * 0.962];

  // Apply reverse gamma correction.
  // tslint:disable-next-line: no-shadowed-variable
  rgb = rgb.map(x => {
    return x <= 0.0031308 ? 12.92 * x : (1.0 + 0.055) * Math.pow(x, 1.0 / 2.4) - 0.055;
  });

  // Bring all negative components to zero.
  // tslint:disable-next-line: no-shadowed-variable
  rgb = rgb.map(x => {
    return Math.max(0, x);
  });

  // If one component is greater than 1, weight components by that value.
  const max = Math.max(rgb[0], rgb[1], rgb[2]);
  if (max > 1) {
    // tslint:disable-next-line: no-shadowed-variable
    rgb = rgb.map(x => {
      return x / max;
    });
  }
  // tslint:disable-next-line: no-shadowed-variable
  rgb = rgb.map(x => {
    return Math.floor(x * 255);
  });

  return rgb;
}

/**
 * Publicly accessible functions exposed as API.
 */

/**
 * Converts hexadecimal colors represented as a String to approximate
 * CIE 1931 coordinates. May not produce accurate values.
 */
function hexToCIE1931(h: string): number[] {
  const rgb = hexToRGB(h);
  return this.rgbToCIE1931(rgb[0], rgb[1], rgb[2]);
}

/**
 * Converts red, green and blue integer values to approximate CIE 1931
 * x and y coordinates. Algorithm from:
 * http://www.easyrgb.com/index.php?X=MATH&H=02#text2. May not produce
 * accurate values.
 */
function rgbToCIE1931(red: number, green: number, blue: number): number[] {
  const point = getXYPointFromRGB(red, green, blue);
  return [point.x, point.y];
}

/**
 * Returns the approximate CIE 1931 x,y coordinates represented by the
 * supplied hexColor parameter, or of a random color if the parameter
 * is not passed.
 */
function getCIEColor(hexColor: string): number[] {
  const hex = hexColor || null;
  let xy = [];
  if (null !== hex) {
    xy = this.hexToCIE1931(hex);
  } else {
    const r = randomRGBValue();
    const g = randomRGBValue();
    const b = randomRGBValue();
    xy = this.rgbToCIE1931(r, g, b);
  }
  return xy;
}

/**
 * Returns the approximate hexColor represented by the supplied
 * CIE 1931 x,y coordinates and brightness value.
 */
function CIE1931ToHex(x: number, y: number, bri: number): string {
  if (bri === undefined) {
    bri = 1;
  }
  const rgb = getRGBFromXYAndBrightness(x, y, bri);
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}

const HexFullRed: string = "FF0000";
const HexFullGreen: string = "00FF00";
const HexFullBlue: string = "0000FF";
const HexFullWhite: string = "FFFFFF";
