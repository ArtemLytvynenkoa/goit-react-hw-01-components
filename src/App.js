import Container from "./components/Container";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";
import userData from "./data/user.json";
import statisticsData from "./data/data.json";
import friendsData from "./data/friends.json";
import transactions from "./data/transactions.json";

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
      <Statistics statisticsData={statisticsData} title=''/>
      <FriendList friends={friendsData}/>
      <TransactionHistory transactions={transactions}/>
    </Container>
  )
}

export default App;
