import Container from "./Components/Container";
import Profile from "./Components/Profile";
import Statistics from "./Components/Statistics";
import userData from "./user.json";
import statisticsData from "./data.json";

function App() {
  return (
    <Container>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics
        statisticsData={statisticsData}/>
      
    </Container>
  )
}

export default App;
