import React from 'react';
import PropTypes from 'prop-types';
import './Employees.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUserFriends } from '@fortawesome/free-solid-svg-icons';

class Employees extends React.Component {
	state = {
		listEmployee: []
	};

	componentDidMount() {
		const { employees, currentReviewer } = this.props;

		console.log('currentReviewer ', currentReviewer);
	}

	showCurrentReviewer = () => {
		const { employees, currentReviewer } = this.props;

		console.log('currentReviewer ', currentReviewer);
  };



	formateTime = () => {
    let now = new Date();
    let formatedDate = now.format("yyyymmdd");
    console.log('formatedDate ', formatedDate);

  };
  

  




	componentWillReceiveProps(next) {
		const { employees, currentReviewer } = this.props;

		console.log('currentReviewer next', next.currentReviewer);

		if (next.currentReviewer) {
			const newEmployee = employees.filter((item) => item.email === next.currentReviewer.email);
			console.log('next.currentReviewer', next.currentReviewer);
			console.log('newEmployee', newEmployee);
			console.log('employees', employees);

			this.setState({ listEmployee: newEmployee });
		}
	}

	render() {
		const { employees } = this.props;
		const { listEmployee } = this.state;

		return (
			<div className="employees">
				Employees
				<div className="employees-wrapper">
					<div className="employees-list">
						<div className="employees-list-item" />

						<div className="header-wrapper">
							<div className="employees-list-header">
								<span className="status">Employee / Domain</span>
								<span className="date">28 Dec (Current)</span>
							</div>
							<div className="employees-reports-header">
								<span>21 Dec</span>
								<span>20 Dec</span>
								<span>19 Dec</span>
								<span>18 Dec</span>
								<span>17 Dec</span>
							</div>
						</div>

						<div className="employees-item">
							<div className="employees-card-wrapper">
								<div className="employee-card">
									<span className="employee-card__info">
										<FontAwesomeIcon className="icon-section" icon={faUserCircle} />
										<div className="wrapper">
											<div className="title">Higashi Mako</div>
											<div className="sub-title">
												<FontAwesomeIcon icon={faUserFriends} />
												People Operations
											</div>
										</div>
									</span>
									<div className="employee-card__status">Submited</div>
								</div>
							</div>
						</div>

            <div >
									Formate time			
						</div>

						{listEmployee.map((item, index) => {
							return (
						<div className="employees-item" key={index}>
							<div className="employees-card-wrapper">
								<div className="employee-card">
									<span className="employee-card__info">
										{/* <FontAwesomeIcon className="icon-section" icon={faUserCircle} /> */}
                    <img className="icon-section" alt="" src={require('../../assets/MeeseeksHQ.png')} />

										<div className="wrapper">
                      <div className="title">{item.name}</div>
											<div className="sub-title">
												<FontAwesomeIcon icon={faUserFriends} />
												People Operations
											</div>
										</div>
									</span>
									<div className="employee-card__status">Submited</div>
								</div>
							</div>
						</div>
							);
						})}

						{employees.map((item, index) => {
							return (
								<div className="revitem" key={index}>
									<div>{item.name}</div>
									<div>
										{item.weeks_with_submitted_reports.map((itemMis, indexMis) => {
											return (
												<div className="retem" key={indexMis}>
													{itemMis}
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

Employees.propTypes = {
	deviceConnected: PropTypes.bool
};

export default Employees;
