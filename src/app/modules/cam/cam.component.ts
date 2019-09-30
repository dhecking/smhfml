import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-cam",
  templateUrl: "./cam.component.html",
  styleUrls: ["./cam.component.css"]
})
export class CamComponent implements OnInit, OnDestroy {
  stream: MediaStream;
  camView: HTMLVideoElement;
  camOutput: HTMLImageElement;
  camSensor: HTMLCanvasElement;
  camTrigger: HTMLButtonElement;

  constructor() {
    console.log("CamComponent::constructor");
  }

  ngOnInit() {
    this.camView = document.querySelector("#cam--view");
    this.camOutput = document.querySelector("#cam--output");
    this.camSensor = document.querySelector("#cam--sensor");
    this.camTrigger = document.querySelector("#cam--trigger");

    this.camStart();
  }

  ngOnDestroy(): void {
    this.camStop();
  }

  camStart() {
    let deviceId: string;

    navigator.mediaDevices.enumerateDevices().then((devices: MediaDeviceInfo[]) => {
      devices = devices.filter(d => d.kind === "videoinput");
      console.log(devices);
      deviceId = devices[0].deviceId;
    });

    // const constraints = { video: {deviceId}, audio: true };
    const hdConstraints = { video: { width: { min: 1280 }, height: { min: 720 } } };

    navigator.mediaDevices
      .getUserMedia(hdConstraints)
      .then((stream: MediaStream) => {
        this.stream = stream;
        this.camView.srcObject = stream;
      })
      .catch(error => {
        console.log(error.message);
      });

    this.camTrigger.onclick = () => {
      this.camSensor.width = this.camView.videoWidth;
      this.camSensor.height = this.camView.videoHeight;
      this.camSensor.getContext("2d").drawImage(this.camView, 0, 0);
      this.camOutput.src = this.camSensor.toDataURL("image/webp");
      this.camOutput.classList.add("taken");
    };
  }

  camStop() {
    this.stream.getVideoTracks().forEach(track => track.stop());
    this.camView.srcObject = null;
  }
}
