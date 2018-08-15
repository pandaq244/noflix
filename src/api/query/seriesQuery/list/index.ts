import * as firebase from 'firebase';
import firebaseConf from '../../../../firebase.config';

interface IProps {
    limit: number,
    type: string
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConf);
};

export default (data: IProps) => {
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection(data.type)
            .limit(data.limit)
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