import React, { Component } from "react";
import styled from "styled-components";
import { Header } from "../Styled Components/Header";
import { Button } from "../Styled Components/Buttons";
import prostars from "../prostar.json";

//Division as Container to hold buttons and table
const Division = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

//table and having its style, background white, border black
const Table = styled.table`
  caption-side: top;
  background-color: white;
  border-collapse: collapse;
  width: 50%;
  td,
  th {
    text-align: center;
    border: 1px solid black;
  }
  td {
    padding: 5px 5px;
    img {
      width: 100px;
    }
  }
`;

class Stardom extends Component {
  constructor() {
    super();
    this.state = {
      //Initially fetching the top 5 prostars
      prostars: [...prostars].slice(0,5),
    };
  }

  //fetching the random prostar
  getRandomProStar=()=>{
    //finding out the length of the prostars array 
    const length=[...prostars].length;
    //getting a random number and using it as the index to get a random prostar
    const random=Math.round(Math.random()*length)
    //getting random prostar
    const randomStar=[...prostars][random];

    //holding the prostar of this state into the array
    const array=this.state.prostars;

    //pushing the random prostar into the prostars of this state
    array.push(randomStar)

    //change the prostars of the state with the pushed random one
    this.setState({prostars:array})
  }

  removeProStar=(name)=>{
    //holding the prostars of the state into the temporary array
    let array=this.state.prostars

    //finding the index of the currently pressed prostar
    const index=array.filter(prostar=>{
      return prostar.name===name
    }).map(prostar=>{
      return array.indexOf(prostar)
    })

    //if the index is greater than 1 remove the prostar from the array
    if(index>-1){
      array.splice(index,1)
    }

    //update the array to the state
    this.setState({prostars:array})
  }

  displayProstars = () => {
    return this.state.prostars.map((proStar) => {
      return (
          <tr>
            <td>
              <img
                src={proStar.pictureUrl}
                alt=""
              />
            </td>
            <td>{proStar.name}</td>
            <td>{proStar.popularity}</td>
            <td>
              <Button delete onClick={()=>this.removeProStar(proStar.name)}>Delete</Button>
            </td>
          </tr>
      );
    });
  };

  sortByName=()=>{
    //holding the state prostars into the temporary array
    let array=this.state.prostars;

    //sorting the prostars based on their names
    array.sort((prostar1,prostar2)=>{
      return prostar1.name > prostar2.name
    })
    //changing the state
    this.setState({prostars:array})
  }

  sortByPopularity=()=>{
    //holding the state prostars into the temporary array
    let array=this.state.prostars;

    //sorting the prostars based on their names
    array.sort((prostar1,prostar2)=>{
      return prostar1.popularity > prostar2.popularity
    })
    //changing the state
    this.setState({prostars:array})
  }

  render() {
    return (
      <div>
        <Header>ProStar</Header>
        <Division>
          <div>
            <Button primary onClick={() => this.getRandomProStar()}>
              Get Random star
            </Button>
            <Button sortByName onClick={()=>this.sortByName()}>Sort By Name</Button>
            <Button sortByPopularity onClick={()=>this.sortByPopularity()}>Sort By Popularity</Button>
          </div>
          <Table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {this.displayProstars()}
            </tbody>

          </Table>
        </Division>
      </div>
    );
  }
}

export default Stardom;
