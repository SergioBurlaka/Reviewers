import React  from 'react';
import PropTypes from 'prop-types';
import './Reviewers.scss';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';



class Reviewers extends React.Component {
  state = {
    showMenu: false,
    currentItem: '',
    options:[]
  };

  componentDidMount() {
    this.setState({ 
      options: this.props.reviewersColection,
      currentItem: this.props.reviewersColection[0]
    });

    this.props.setCurrentReviewer(this.props.reviewersColection[0])
  }




  changeShowMwnu = () =>{
    const {showMenu} = this.state;
    console.log('fire select-menu')
    console.log(" reviewersColection ", this.props.reviewersColection)
    this.setState({ showMenu: !showMenu });
  }


  setCurrentItem = (currentItem) =>{
    console.log('currentItem ', currentItem)
    this.setState({ currentItem: currentItem[0] });
    this.props.setCurrentReviewer(currentItem[0])
  }



  render() {
    const {showMenu, options, currentItem} = this.state;


    return (
      <div className="Reviewers">
       Reviewers
        <div
         className={`reviewers-select ${ showMenu ? 'open-menu': ''}`} 
          onClick={() => {
                  this.changeShowMwnu()
                }} >
          <div className="reviewers-select__hrader">
            <span className="reviewers-select__current">
                <FontAwesomeIcon className="icon-section" icon={faUserCircle} /> 
                <div className="wrapper">
                  <div className="title">
                    Reviewer
                  </div>
                  <div className="sub-title">
                    {currentItem.name}
                  </div>
                </div>
              </span>
            <div className="reviewers-select__icon">
              <FontAwesomeIcon icon={faChevronDown} /> 
            </div>
          </div>
          {showMenu &&
            <div className="reviewers-select__body">
              {options && options.length > 0  && options.map((item, index) => {
                return (
                  <div className="reviewers-select__item"
                    onClick={() => {
                      this.setCurrentItem(options.filter( (currentItem, currentIndex) => currentIndex === index))
                    }}
                    key={index}>
                    {item.name}
                    </div>
                )
                
              })}


            </div>
            }
          
        </div>
       
      </div>
    )
  }
}

Reviewers.propTypes = {
  deviceConnected: PropTypes.bool,
 
};


export default Reviewers;