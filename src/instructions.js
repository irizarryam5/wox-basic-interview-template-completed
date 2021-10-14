import React from "react";

export default class Instructions extends React.Component {
  render() {
    return (
      <div>
        <h3>The Wox Interview!</h3>

        <p>
          Create a new table component that elegantly displays the data in
          fakeData.json in following format:
        </p>

        <table className={"exp-t"}>
          <tr>
            <td>●</td>
            <td>Full Name</td>
            <td>Full Address</td>
            <td>Blurb</td>
            <td>email</td>
            <td>image count</td>
          </tr>
        </table>

        <p> Table requirements: </p>
        <ol className={"ex"}>
          <li> The dot should be the color of their favorite color</li>
          <li>
            {" "}
            Image count is the number of images in the vacation_pics array
          </li>
          <li> You must be able to search the values of all text columns </li>
          <li>
            {" "}
            You must be able to sort on all column except for favorite color
          </li>
        </ol>

        <p> Extra credit: </p>
        <div className={"ex"}>
          Give me some place to click on the table to view the vacation pics{" "}
        </div>

        <p>
          {" "}
          Style matters! You're a front end developer... make it somewhat
          pretty.
        </p>
      </div>
    );
  }
}
