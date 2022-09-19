import { Component, OnInit } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs } from '@angular/fire/firestore';
import { Colors } from 'src/models/colors.class';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {
  colRef: any;
  docRef: any;
  docsSnap: any;

  colorId: string;
  timeStemp: any;
  colorsClass = new Colors();
  colorsArray = [];

  constructor(private firestore: Firestore) { }

  async ngOnInit(): Promise<void> {
    await this.getAllData();
  }


  // Get All Documents Data From A Collection
  async getAllData() {
    this.colRef = collection(this.firestore, "colorData");
    this.docsSnap = await getDocs(this.colRef);

    this.docsSnap.forEach((doc: any) => {
      this.colorsClass.id = doc.id;
      this.colorsClass.firstColor = doc.data()['firstColor'];
      this.colorsClass.secondColor = doc.data()['secondColor'];
      this.colorsClass.timeStemp = doc.data()['timeStemp'];

      this.colorsArray.push(this.colorsClass.toJSON());
    });

    // Sort timestamp ascending order
    this.colorsArray.sort(function (a, b) {
      return parseFloat(a.timeStemp) - parseFloat(b.timeStemp);
    });

    this.colorsClass.firstColor = '';
    this.colorsClass.secondColor = '';
    console.log('colorsArray ', this.colorsArray);
  }

  // input value -> colorsClass -> firebase
  addColorToDoc() {
    this.timeStemp = new Date;
    this.colorsClass.timeStemp = this.timeStemp.getTime();

    addDoc(this.colRef, this.colorsClass.toJSON())
      .then(() => {
        this.colorsArray = [];
        this.getAllData();
      })
      .catch(error => {
        console.log(error);
      })
  }

  // 
  deleteOneDoc(id: any) {
    this.docRef = doc(this.firestore, "colorData", id);
    deleteDoc(this.docRef).then(() => {
      this.colorsArray = [];
      this.getAllData();
    })
  }

}
