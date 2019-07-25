import React from "react";
import Layout from "../components/Layout";
import GoogleMapReact from 'google-map-react';


class SearchPlaces extends React.Component {
    static defaultProps = {
        center: {
            lat: 36.95,
            lng: 127.33
        },
        zoom: 11
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key:"AIzaSyD_vS1BNP1fhn3-eqIi8dr7gSt_ndklbGI" }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                    </GoogleMapReact>
                </div>
            </Layout>
        );
    }

}

export default SearchPlaces;