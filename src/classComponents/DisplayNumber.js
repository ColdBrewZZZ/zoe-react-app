import React from 'react';


export class DisplayNumber extends React.Component {
    render() {
        return (
            <div>
                <div class="container bg-info text-center opacity-25">
                    <p class="p-2">you've clicked <span>{this.props.selectedNumber}</span></p>
                </div>
            </div>
        );
    }
}
