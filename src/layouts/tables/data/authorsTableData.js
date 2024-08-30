// /* eslint-disable react/prop-types */
// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonAvatar from "components/ArgonAvatar";
// import ArgonBadge from "components/ArgonBadge";

// // Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

// function Author({ image, name, email }) {
//   return (
//     <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
//       <ArgonBox mr={2}>
//         <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
//       </ArgonBox>
//       <ArgonBox display="flex" flexDirection="column">
//         <ArgonTypography variant="button" fontWeight="medium">
//           {name}
//         </ArgonTypography>
//         <ArgonTypography variant="caption" color="secondary">
//           {email}
//         </ArgonTypography>
//       </ArgonBox>
//     </ArgonBox>
//   );
// }

// function Function({ job, org }) {
//   return (
//     <ArgonBox display="flex" flexDirection="column">
//       <ArgonTypography variant="caption" fontWeight="medium" color="text">
//         {job}
//       </ArgonTypography>
//       <ArgonTypography variant="caption" color="secondary">
//         {org}
//       </ArgonTypography>
//     </ArgonBox>
//   );
// }

// const authorsTableData = {
//   columns: [
//     { name: "author", align: "left" },
//     { name: "function", align: "left" },
//     { name: "status", align: "center" },
//     { name: "employed", align: "center" },
//     { name: "action", align: "center" },
//   ],

//   rows: [
//     {
//       author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
//       function: <Function job="Manager" org="Organization" />,
//       status: (
//         <ArgonBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
//       ),
//       employed: (
//         <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
//           23/04/18
//         </ArgonTypography>
//       ),
//       action: (
//         <ArgonTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </ArgonTypography>
//       ),
//     },
//     {
//       author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
//       function: <Function job="Programator" org="Developer" />,
//       status: (
//         <ArgonBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
//       ),
//       employed: (
//         <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
//           11/01/19
//         </ArgonTypography>
//       ),
//       action: (
//         <ArgonTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </ArgonTypography>
//       ),
//     },
//     {
//       author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
//       function: <Function job="Executive" org="Projects" />,
//       status: (
//         <ArgonBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
//       ),
//       employed: (
//         <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
//           19/09/17
//         </ArgonTypography>
//       ),
//       action: (
//         <ArgonTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </ArgonTypography>
//       ),
//     },
//     {
//       author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
//       function: <Function job="Programator" org="Developer" />,
//       status: (
//         <ArgonBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
//       ),
//       employed: (
//         <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
//           24/12/08
//         </ArgonTypography>
//       ),
//       action: (
//         <ArgonTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </ArgonTypography>
//       ),
//     },
//     {
//       author: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
//       function: <Function job="Manager" org="Executive" />,
//       status: (
//         <ArgonBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
//       ),
//       employed: (
//         <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
//           04/10/21
//         </ArgonTypography>
//       ),
//       action: (
//         <ArgonTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </ArgonTypography>
//       ),
//     },
//     {
//       author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
//       function: <Function job="Programtor" org="Developer" />,
//       status: (
//         <ArgonBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
//       ),
//       employed: (
//         <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
//           14/09/20
//         </ArgonTypography>
//       ),
//       action: (
//         <ArgonTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </ArgonTypography>
//       ),
//     },
//   ],
// };

// export default authorsTableData;





/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

// Example list of users
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
    subscriptionStartDate: "2024-08-29T16:42:47.771Z"
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
    updatedAt: "2024-08-30T06:55:16.042Z"
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
    updatedAt: "2024-08-30T07:38:55.034Z"
  }
];


function Author({ image, name, email }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="secondary">
          {email}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}








const authorsTableData = {
  columns: [
        { name: "author", align: "left" },

    { name: "password", align: "left" },
    { name: "subscriptionPlanID", align: "left" },

    { name: "role", align: "center" },
    { name: "subscription", align: "center" },
    { name: "createdAt", align: "center" },
  ],

  rows: users.map((user) => ({
    author: <Author image={user.profilePic} name={user.name} email={user.email} />,
    // name: (
    //   <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
    //     <ArgonBox mr={2}>
    //       <ArgonAvatar src={user.profilePic} alt={user.name} size="sm" variant="rounded" />
    //     </ArgonBox>
    //     <ArgonBox display="flex" flexDirection="column">
    //       <ArgonTypography variant="button" fontWeight="medium">
    //         {user.name}
    //       </ArgonTypography>
    //     </ArgonBox>
    //   </ArgonBox>
    // ),
    password: (
      <ArgonTypography variant="caption" color="secondary">
        {user.password}
      </ArgonTypography>
    ),

    subscriptionPlanID: (
      <ArgonTypography variant="caption" color="secondary">
        {user.subscriptionPlanID}
      </ArgonTypography>
    ),

    role: (
      <ArgonTypography variant="caption" fontWeight="medium" color="text">  
        {user.role}
      </ArgonTypography>
    ),
    subscription: (
      <ArgonBadge
        variant="gradient"
        badgeContent={user.isSubscriptionActive ? "Active" : "Inactive"}
        color={user.isSubscriptionActive ? "success" : "secondary"}
        size="xs"
        container
      />
    ),
    createdAt: (
      <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
        {new Date(user.createdAt).toLocaleDateString()}
      </ArgonTypography>
    ),
  })),
};

export default authorsTableData;
