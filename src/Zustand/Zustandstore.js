import {create} from 'zustand'

const userStore=create((set,getState)=>{
    var user={}
    const SetUser=()=>set((state)=>{
       user=state.user
    })
   const removeuser=()=>set({user:null})

})
export default userStore