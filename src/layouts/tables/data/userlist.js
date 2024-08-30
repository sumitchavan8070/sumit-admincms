import React from "react";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";



// Sample data
const users = [
  {
    _id: "66cc3d582ba294779b5946bd",
    name: "Shubham",
    username: "shubham",
    email: "shubhamdchavan1111@gmail.com",
    password: "12345678",
    role: "user",
    fcmToken: "dHnNB_dtQCO2HqWMHIaDDg:APA91bFwSqN7FFxhXKOC1jNWNi_XvYGS7l4Rcx7Os-C2YvtvYy_rGcXXXA-_4ArVN1zRUI6RjIEZdea_Y62byzDcOMm5J1uEx9hVh_c4Jhs7BZnvgAxXg7twxF56qoQ9GVd33ROpfHi-",
    profilePic: "https://wallpapercave.com/wp/wp4172190.jpg",
    isSubscriptionActive: true,
    subscriptionPlanID: "66cae8ca5e88007e484b9afc",
    createdAt: "2024-08-26T08:31:20.048Z",
    updatedAt: "2024-08-30T06:18:58.470Z",
    purchasePaymentId: "pay_Oqmj6voawZg9ro",
    subscriptionExpiryDate: "2024-09-28T16:42:47.771Z",
    subscriptionStartDate: "2024-08-29T16:42:47.771Z",
  },
  {
    _id: "66d16cd41bd840732ee2d8a4",
    name: "test",
    username: "test",
    email: "test@test.com",
    password: "nanajakkakakakakakak",
    role: "user",
    fcmToken: "dHnNB_dtQCO2HqWMHIaDDg:APA91bFwSqN7FFxhXKOC1jNWNi_XvYGS7l4Rcx7Os-C2YvtvYy_rGcXXXA-_4ArVN1zRUI6RjIEZdea_Y62byzDcOMm5J1uEx9hVh_c4Jhs7BZnvgAxXg7twxF56qoQ9GVd33ROpfHi-",
    profilePic: "https://wallpapercave.com/wp/wp4172190.jpg",
    isSubscriptionActive: false,
    subscriptionPlanID: null,
    purchasePaymentId: null,
    subscriptionStartDate: null,
    subscriptionExpiryDate: null,
    createdAt: "2024-08-30T06:55:16.042Z",
    updatedAt: "2024-08-30T06:55:16.042Z",
  },
  {
    _id: "66d16d0e1bd840732ee2d8ac",
    name: "test2",
    username: "test2",
    email: "test2@gmail.com",
    password: "nanmamaaaaa",
    role: "user",
    fcmToken: "dHnNB_dtQCO2HqWMHIaDDg:APA91bFwSqN7FFxhXKOC1jNWNi_XvYGS7l4Rcx7Os-C2YvtvYy_rGcXXXA-_4ArVN1zRUI6RjIEZdea_Y62byzDcOMm5J1uEx9hVh_c4Jhs7BZnvgAxXg7twxF56qoQ9GVd33ROpfHi-",
    profilePic: "https://wallpapercave.com/wp/wp4172190.jpg",
    isSubscriptionActive: false,
    subscriptionPlanID: null,
    purchasePaymentId: null,
    subscriptionStartDate: null,
    subscriptionExpiryDate: null,
    createdAt: "2024-08-30T06:56:14.931Z",
    updatedAt: "2024-08-30T07:38:55.034Z",
  },
];

function UserList() {
  return (
    <div>
      {users.map((user) => (
        <div key={user._id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={user.profilePic} alt={user.name} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {user.name}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="secondary">
          {user.email}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>



    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
    job
      </ArgonTypography>
      <ArgonTypography variant="caption" color="secondary">
        org
      </ArgonTypography>
    </ArgonBox>

          <p>Role: {user.role}</p>
          <p>Subscription Active: {user.isSubscriptionActive ? "Yes" : "No"}</p>
          {user.isSubscriptionActive && (
            <div>
              <p>Subscription Start: {new Date(user.subscriptionStartDate).toLocaleDateString()}</p>
              <p>Subscription Expiry: {new Date(user.subscriptionExpiryDate).toLocaleDateString()}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserList;
