import React from 'react';
import './App.css';
import { Sheet } from './Sheet';
import { Club} from './model/ClubCriteria';
import Container from 'react-bootstrap/Container';

import { SelectClub } from './SelectClub';

interface AppState {
  clubSelected : Club;
}
export class App extends React.Component<{},AppState> {

  constructor(props: any){
      super(props);
    this.clubSelected = this.clubSelected.bind(this);
  }

  clubSelected(club: Club) {
    this.setState({
      clubSelected : club
    })
    console.log(club);
  }

  render() {
    var sheet = <SelectClub onSelection={this.clubSelected} />;
    if (this.state){
      sheet = <Sheet club={this.state.clubSelected} />;
    }

    return (
      <Container>
        {sheet}
      </Container>
    );
  }
}

export default App;
