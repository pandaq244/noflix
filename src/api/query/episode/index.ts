import * as firebase from 'firebase';


export default (id: string) => {
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection('episode')
            .doc(id)
            .get()
            .then(snap => resolve(snap))
            .catch(error => reject(error));
        });
};