import React from 'react';
import {Field, reduxForm} from "redux-form";

class StreamForm extends React.Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field &{meta.error && meata.touched ? 'error': ''`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" style={{borderColor: 'rgba(34,36,38,.15)'}}/>
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = formValues => {

    };

    onButtonClick = ({target}) => {
        if (target.innerHTML === 'Zmień') {
            target.style.backgroundColor = '#CCCCCC';
            target.innerHTML = 'Saved';
            setTimeout(() => {
                target.style.backgroundColor = '#FF0000';
                target.innerHTML = 'Zmień';
            }, 1500);
        }
    };

    render() {
        return (
            <div className="ten wide column">
                <div style={{height: '100%', backgroundColor: 'white', padding: '0.5rem'}}>
                    <h3>Informacje:</h3>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                        <Field name="title" component={this.renderInput} label="Tytuł:"/>
                        <Field name="language" component={this.renderInput} label="Język:"/>
                        <Field name="category" component={this.renderInput} label="Kategoria:"/>
                        <Field name="tags" component={this.renderInput} label="Tagi:"/>
                        <button id="submitButton" className="ui right floated large button"
                                style={{color: 'black', backgroundColor: 'red', marginBottom: '0.5rem'}}
                                onClick={this.onButtonClick}>Zmień
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'streamForm'
})(StreamForm);