/**
 * Created by ${USER} on ${DATE}.
 * https://www.jetbrains.com/help/webstorm/file-template-variables.html
 动画callback只支持1.x版本的TransitionGroup
 */
import React,{Component} from 'react';
import './template-component.css';
const styles = {
    container: {}
};
//import ReactDOM from 'react-dom';
//import {TweenMax} from "gsap";
//import PropTypes from 'prop-types';

class TemplateComponent extends React.Component {
    static defaultProps = {
        ...Component.defaultProps
    }
    static propTypes = {}
    render() {
        return (
            <div ref={this.dom}></div>
        );
    }
}

export default TemplateComponent;
