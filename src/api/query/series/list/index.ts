import * as firebase from 'firebase';
import firebaseConf from '../../../../firebase.config';

interface IProps {
    collection: string,
    count: number,
    order: string
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConf);
};

export const seriesListQuery = (data: IProps) => {
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection(data.collection)
            .orderBy(data.order)
            .limit(data.count)
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
