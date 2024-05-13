import { type User } from "firebase/auth";
import { auth, db } from "../config";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { type IUserResource } from "@/ts/interface";

export class DataBaseService {
  user: User | null;

  constructor(){
    this.user = auth.currentUser;
  }

  async initialize(){
    await setDoc(doc(db, 'users', `${this.user?.uid}`), {
      content: []
    });
  }

  async get(){  
    if(this.user){
      const docRef = doc(db, 'users', this.user.uid);

      return await getDoc(docRef)
        .then((result) => {
          return result.data();
        })
        .catch((error) => {
          return error;
        });
    }

    return 'user not connect'
  }

  async save(data: IUserResource){
    if(this.user){
      const docRef = doc(db, 'users', this.user.uid);
      const updatedDoc = await this.updateContent(data);

      return await updateDoc(docRef, { content: updatedDoc})
        .then(() => {
          return 'Content saved with sucess!';
        }).catch((error) => {
          return error;
        });
    }
  }

  async updateContent(data: IUserResource){
    const currentResource = await this.get() as {content: IUserResource[]}
    currentResource.content.unshift(data);
    return currentResource.content;
  };
}

