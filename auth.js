const signupUsername = document.querySelector('#signupUsername')
const signupEmail = document.querySelector('#signupEmail')
const signupPassword = document.querySelector('#signupPassword')
const signupBtn = document.querySelector('#signupBtn')

const loginEmail = document.querySelector('#loginEmail')
const loginPassword = document.querySelector('#loginPassword')
const loginBtn = document.querySelector('#loginBtn')

signupBtn.addEventListener('click', async (e) => {
     e.preventDefault();
    try {
        const { data, error } = await supabase.auth.signUp({
            email: signupEmail.value,
            password: signupPassword.value,
        })
        if (error) throw error
        if (data) {
            Swal.fire('Success', 'Please check your email for confirmation', 'success');
            // console.log(alert)
        }
        signupUsername.value = ''
        signupEmail.value = ''
        signupPassword.value = ''
        return data
        
    } catch (error) {
        console.log(error)
    }
    
})

loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
   try {
       const { data, error } = await supabase.auth.signUp({
           email: loginEmail.value,
           password: loginPassword.value,
       })
       if (error) throw error
       if (data) {
         if (!loginEmail) {
      swal("Error!", "Invalid email!", "error");
    } else if (!loginPassword) {
      swal("Error!", "Invalid password!", "error");
    } else {
        swal({
            title: "Success!",
            text: "Login successful!",
            icon: "success",
            button: "OK",
          })
           // console.log(alert)
       }
       signupUsername.value = ''
       signupEmail.value = ''
       signupPassword.value = ''
       return data
       
   } }catch (error) {
       console.log(error)
   }
   
})


