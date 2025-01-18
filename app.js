const showUsername = async () => {
    const { data: { user } } = await supabase.auth.getUser();
  
    if (user) {
      const { data, error } = await supabase
        .from('profiles')
        .select('username')
        .eq('user_id', user.id)
        .single();
  
      if (data) {
        document.getElementById('username').textContent = `Welcome, ${data.username}`;
      } else {
        console.error(error);
      }
    }
  };
  
  showUsername();
  