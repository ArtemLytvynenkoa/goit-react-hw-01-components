import Container from "./Components/Container";
import Profile from "./Components/Profile";
import Statistics from "./Components/Statistics";
import FriendList from "./Components/FriendList";
import userData from "./user.json";
import statisticsData from "./data.json";
import friendsData from "./friends.json";

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
      <Statistics statisticsData={statisticsData} />
      <FriendList friends={friendsData}/>
      
    </Container>
  )
}

export default App;
