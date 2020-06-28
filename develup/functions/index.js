const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
    
const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});
    
    
exports.postCreated = functions.firestore
    .document('posts/{postId}')
    .onCreate(doc => {
    const post = doc.data();
    const notification = {
        content: 'added a new project',
        user: `${post.authorFirstName} ${post.authorLastName}`,
        userAvatar: post.authorAvatar,
        time: admin.firestore.FieldValue.serverTimestamp()
        }
        createNotification(notification);
});

exports.userJoined = functions.firestore.document("users/{uid}")
 .onCreate(doc => {
  const user = doc.data();
  const notification = {
   content: 'has landed',
   user: `${user.firstName} ${user.lastName}`,
   userAvatar: user.avatar,
   time: admin.firestore.FieldValue.serverTimestamp()
  };
  createNotification(notification);
});