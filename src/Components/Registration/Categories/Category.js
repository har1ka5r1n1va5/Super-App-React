import React from "react";
import '../Categories/Category.css'

function Category(){
    return(
        <div className="container">
            <div className="left">
                <h1 className="header">Super app</h1>
                <p className="select-category">Choose your Entertainment Category</p>
            </div>
            < div className="right">
                <button className="Button action"><p className="para">Action</p><img src="C:\Users\SRAVANI\Desktop\Capstone project\super-app\public\action.png" alt="action" className="Action"></img></button>
                <button className="Button drama"><p className="para">Drama</p><img src="C:\Users\SRAVANI\Desktop\Capstone project\super-app\src\images\drama.png"alt="Drama" className="Action"></img></button>
                <button className="Button romance"><p className="para">Romance</p><img src="https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc=" alt="Romance" className="Action"></img></button>
                <button className="Button thriller"><p className="para">Thriller</p><img src="https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc=" alt="Thriller" className="Action"></img></button>
                <button className="Button western"><p className="para">Western</p><img src="https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc=" alt="Western" className="Action"></img></button>
                <button className="Button horror"><p className="para">Horror</p><img src="https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc=" alt="Horror" className="Action"></img></button>
                <button className="Button fantasy"><p className="para">Fantasy</p><img src="https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc=" alt="Fantasy" className="Action"></img></button>
                <button className="Button music"><p className="para">Music</p><img src="https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc=" alt="Music" className="Action"></img></button>
                <button className="Button fiction"><p className="para">Fiction</p><img src="" alt="Fiction" className="Action"></img></button>
            </div>

        </div>
    )
}

export default Category