import React from 'react';

function RcipePage() {
    return (
        <div classNameName="container-fluid">
            <div classNameName="card mb-3" style={{maxWidth: "540px"}}>
                <div classNameName="row no-gutters">
                    <div classNameName="col-md-4">
                        <img src="..." classNameName="card-img" alt="pasta" style={{maxWidth: "200px", maxHeight: "200px"}}/>
                    </div>
                    <div classNameName="col-md-8">
                        <div classNameName="card-body">
                            <h5 classNameName="card-title">Recipe Name</h5>
                            <p classNameName="card-text">Source</p>
                            <p classNameName="card-text"><small classNameName="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-header">
                    Ingredients
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-header">
                    Directions
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        </div>
    );
}

export default RcipePage;