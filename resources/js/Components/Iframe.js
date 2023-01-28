import React from 'react';

export default function Iframe() {
    return (
        <iframe src={this.props.src} height={this.props.height} width={this.props.width}/> 
    );
}
