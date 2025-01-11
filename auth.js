const signupUsername = document.querySelector('#signupUsername')
const signupEmail = document.querySelector('#signupEmail')
const signupPassword = document.querySelector('#signupPassword')

const signupBtn = document.querySelector('#signupBtn')

signupBtn.addEventListener('click', async (e) => {
     e.preventDefault();
    try {
        const { data, error } = await supabase.auth.signUp({
            email: signupEmail.value,
            password: signupPassword.value,
        })
        if (error) throw error
        if (data) {
            alert('Please check your email for confirmation')
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


