const signupUsername = document.querySelector('#signupUsername');
const signupEmail = document.querySelector('#signupEmail');
const signupPassword = document.querySelector('#signupPassword');
const signupBtn = document.querySelector('#signupBtn');

const loginEmail = document.querySelector('#loginEmail');
const loginPassword = document.querySelector('#loginPassword');
const loginBtn = document.querySelector('#loginBtn');


// *****************Signup Auth *******************

signupBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const { data, error } = await supabase.auth.signUp({
            email: signupEmail.value,
            password: signupPassword.value,
        });
        if (error) throw error;
        if (data) {
            Swal.fire('Success', 'Please check your email for confirmation', 'success');
        }
        signupUsername.value = '';
        signupEmail.value = '';
        signupPassword.value = '';
        return data;
        
    } catch (error) {
        console.log(error);
        Swal.fire('Error', 'Signup failed. Please try again.', 'error');
    }
});

// *****************Login Auth *******************

loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    if (!loginEmail.value) {
        Swal.fire('Error', 'Please enter your email', 'error');
        return;
    }
    if (!loginPassword.value) {
        Swal.fire('Error', 'Please enter your password', 'error');
        return;
    }

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginEmail.value,
            password: loginPassword.value,
        });
        if (error) {
            Swal.fire('Error', 'Invalid credentials, please try again', 'error');
        } else {
            Swal.fire('Success', 'Login successful!', 'success');
           
        }
        return data;
        
    } catch (error) {
        console.log(error);
        Swal.fire('Error', 'An unexpected error occurred', 'error');
    }
});


// ******************Google Auth **********************

const googleLoginBtn = document.getElementById('google-signin');

async function signInWithGoogle() {
    try {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'https://myawesomeapp.netlify.app/success.html' 
            }
        });

        if (error) throw error;
        console.log('Redirecting to Google login...');
    } catch (error) {
        console.error('Error during Google sign-in:', error.message);
    }
}

googleLoginBtn.addEventListener('click', signInWithGoogle);