import React from 'react'
import './Card.css'
import Button from './Button.js'
import ToDoList from './ToDoList.js'
const Card = () => {
    return (
        <div class="section-card">
            <ToDoList />
            <div className="Cards ">
                <div class="block-left">
                    <h1 id="heading">Design Your List</h1>
                </div>
                <div class="Card-area">
                    <div class="Card-1">
                        <div class="header">
                            <Button />
                            <div>Jonane Doe</div>
                            <div class="urgency"></div>
                        </div>
                        <div class="content">
                        <p class="paragraph">Occaecat excepteur labore cillum non sit commodo esse elit nulla. Proident dolor dolore amet ad adipisicing adipisicing mollit ea magna deserunt elit veniam deserunt. Labore ipsum sint dolore duis fugiat consequat occaecat. Fugiat sint est non laborum incididunt culpa non dolore.
                        </p>
                        </div>
                    </div>
                    <div class="Card-1">
                        <div class="header">
                            <div>Jonane Doe</div>
                            <div class="urgency"></div>
                        </div>
                        <div class="content">
                        <p class="paragraph">Occaecat excepteur labore cillum non sit commodo esse elit nulla. Proident dolor dolore amet ad adipisicing adipisicing mollit ea magna deserunt elit veniam deserunt. Labore ipsum sint dolore duis fugiat consequat occaecat. Fugiat sint est non laborum incididunt culpa non dolore.
                        </p>
                        </div>
                    </div>
                    <div class="Card-1">
                        <div class="header">
                            <div>Jonane Doe</div>
                            <div class="urgency"></div>
                        </div>
                        <div class="content">
                        <p class="paragraph">Occaecat excepteur labore cillum non sit commodo esse elit nulla. Proident dolor dolore amet ad adipisicing adipisicing
                        </p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
}
export default Card
