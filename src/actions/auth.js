


import axios from '../api/axios';
import { types } from '../types/types'
// import { notesLogout } from './notes';
// import { finishLoading, startLoading } from "./ui";


const LOGIN_URL = "/users/login"


export const startLoginEmailPassword = ( email, password) => {
  return ( dispatch ) => {   

      // dispatch( startLoading() );

      axios
        .post(
        LOGIN_URL,
        JSON.stringify({
          email, password
        }),
        {
          headers: { "Content-Type": "application/json"},
          withCredentials: true,
        }

        )
        .then(
          response => {
            let data = response.data;
            console.log(data);
            // dispatch(login( data ))
          }
        )
        .catch( error => {
          console.log(`Error: ${ error }`);
        })

      // firebase.auth().signInWithEmailAndPassword(
      //   email, 
      //   password
      // ).then( ({user}) =>{

      //   dispatch(login( user.uid, user.displayName))    
      //   dispatch( finishLoading() );

      // }).catch( e => {
      //   console.log(e);
      //   dispatch( finishLoading() );
      //   Swal.fire(
      //     'Error', e.message, 'error'
      //   );
      // }) 

  }
}

// export const startRegisterWithEmailPasswordName = ( email, password, name) => {

//   return ( dispatch ) => {
//     firebase.auth().createUserWithEmailAndPassword(
//       email, password
//     ).then(  async ({ user }) => {  

//       await user.updateProfile( { displayName: name } )
            
//       dispatch(
//         login( user.uid, user.displayName )
//       );
      
//     }).catch( err => {
//       console.log(err)
//     })
//   }

// }


export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
      uid, displayName
    }
  })


// export const startLogout = () => {
//   return async( dispatch ) => {
//     await firebase.auth().signOut();

//     // dispatch( logout() );
//     // dispatch( notesLogout() )

//   }
// }

export const logout = () => ({
  type: types.logout

})