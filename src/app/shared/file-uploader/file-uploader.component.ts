import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-file-uploader",
  templateUrl: "./file-uploader.component.html",
  styleUrls: ["./file-uploader.component.less"]
})
export class FileUploaderComponent implements OnInit {
  imageSource: any;
  @Output() onLoad = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSource = reader.result;
        this.onLoad.emit(reader.result);
      };
    }
  }
}
