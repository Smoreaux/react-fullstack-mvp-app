import React from "react";

const GoalsList = () => {
    return <>Goals List
      <table className="table">
    <thead>
      <tr>
        <th>Firstname</th> 
        <th>Lastname</th> 
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Coriolanus</td>
        <td>Snow</td>
        <td>PresidentSnowSucks@hotmail.com</td>
      </tr>
      <tr>
        <td>Katniss</td>
        <td>Everdeen</td>
        <td>Katnip@gmail.com</td>
      </tr>
      <tr>
        <td>Peeta</td>
        <td>Malark</td>
        <td>Peetasucks@yahoo.com</td>
      </tr>
    </tbody>
  </table>
    </>
    
};

export default GoalsList;