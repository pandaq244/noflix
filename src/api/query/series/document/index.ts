import * as firebase from 'firebase';
import firebaseConf from '../../../../firebase.config';


if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConf);
};

export const seriesDocQuery = (id: string) => {
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection('series')
            .doc(id)
            .get()
            .then(snap => resolve(snap))
            .catch(error => reject(error));
    });
};
