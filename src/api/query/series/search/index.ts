import * as firebase from 'firebase';
import firebaseConf from '../../../../firebase.config';

interface IProps {
    collection: string,
    count: number,
    name: string,
    order: string,
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConf);
};

export default (data: IProps) => {
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection(data.collection)
            .orderBy(data.order)
            .startAt(data.name)
            .endAt(String.fromCharCode(data.name.charCodeAt(0)+1))
            .get()
            .then(snap => {
                const documents: object[] = [];

                snap
                    .forEach(doc => {
                        documents.push({
                            data: doc.data(),
                            id: doc.id
                        });
                    });
                resolve(documents);
            })
            .catch(error => reject(error));
    });
};
