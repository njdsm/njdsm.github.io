import { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import "./navbar.css"

class NavBar extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav nav navbar">
                        {/* <Link to="/" class="nav-link main-title">
                            <li>
                                <strong className="main-title">Home</strong>
                            </li>
                        </Link>
                        <Link to="/active_game" class="nav-link">
                            <li >
                                Current Game HOST
                            </li>
                        </Link>
                        <Link to="/profile" class="nav-link">
                            <li >
                                Profile
                            </li>
                        </Link>
                        <Link to="/create_game" class="nav-link">
                            <li >
                                Create Game
                            </li>
                        </Link>
                        <Link class="nav-link" to="/login" onClick={() => this.props.logout(this.props.user)}>
                            <li>
                                Logout HOST
                            </li>
                        </Link> */}
                    </ul>
                </div>
            </nav>
        )
    }
}

NavBar.propTypes = {
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { logout })(NavBar);