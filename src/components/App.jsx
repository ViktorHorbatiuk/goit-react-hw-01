import userData from "./Profile/userData.json";
// import data from "./Statistics/data.json";
// import friends from "./FriendsList/friends.json";
// import transactions from "./TransactionHistory/transactions.json";

import Profile from "./Profile/Profile";
// import Statistics from "./Statistics/Statistics";
// import FriendsList from "./FriendsList/FriendsList";
// import TransactionHistory from "./TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      {/* <Statistics title="upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} /> */}
    </>
  );
};

export default App;
