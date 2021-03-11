import React from 'react';
import '../../index.css';
import './Home.scss';
import FormWizard from '../FormWizard/FormWizard.component';

class HomeComponent extends React.Component {
    // const title = 'React Training';

    constructor(props) {
        super(props)
        // const userId = this.props.location.split('id='); // http://localhost:3000/user-details?id=1&otherData=whateverotherdata

        /**
         * let showButtons123 = false;
         * let showBUttons456 = false;
         *
         * if (this.props.history.location[0].includes('RouteC')) {
         *      showButtons123 = true;
         * } else if (this.props.history.location[0].includes('RouteB')) {
         *  showButtons456 = true;
         * }
         */

        this.state = {
            // activeFormPage: urlChunks[1]
            // showButtons123: showButtons123,
            // showButtons456: showButtons456
        }

    }
    render() {

        // this.props.history

        return (
            /**
             * {this.state.showButtons123 ? this.renderButtons123() : ''}
             * {this.state.showButtons456 ? <button>4</button> : ''}
             */
            <div>
                <FormWizard history={this.props.history} />
            </div>
        )
    }

    /**
     * renderButtons123 = () => {
     *  return <button>1</button>
     * }
     */
}

export default HomeComponent