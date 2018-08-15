import * as React from 'react';
import { connect } from 'react-redux';

import { episodeQuery, sourceQuery } from '../../../../../api/query';

interface IProps {
    episode: number,
    season: number,
    updateSeries: any,
    updateEpisode: any,
    id: string
};

const createLi = (props: IProps) => {
    async function update() {
        const queryEpisode = await episodeQuery(
            props.id
        );
        const episodeData = Object(queryEpisode).data();

        const querySource = await sourceQuery(
            episodeData.source.id
        );
        const sourceData = Object(querySource).data();

       
        props.updateSeries({
            episode: props.episode,
            season: props.season
        });

        props.updateEpisode({
            description: episodeData.description,
            name: episodeData.name,
            source: sourceData.source
        })
    }
    return(
        <li onClick={update}>{props.id}</li>
    );
};

const mapStateToProps = (state: any) => {
    return {
        series: state.series
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateEpisode: (data: any) => {
            dispatch({
                payload: {
                    description: data.description,
                    name: data.name,
                    source: data.source
                },
                type: 'updateEpisodeInfo'
            });
        },
        updateSeries: (data: any) => {
            dispatch({
                payload: {
                    episode: data.episode,
                    season: data.season
                },
                type: 'updateSeriesSetings'
            });
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(createLi);

