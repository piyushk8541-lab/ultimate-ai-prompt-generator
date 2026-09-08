import React,{useState}from"react";import{signIn,signUp}from"../lib/authService";

export default function AuthPanel(){
  const [mode,setMode]=useState("signin"),
    [email,setEmail]=useState(""),
    [password,setPassword]=useState(""),
    [message,setMessage]=useState("");

  const submit=async e=>{
    e.preventDefault();
    setMessage("Working...");
    try{
      const r=mode==="signin"
        ?await signIn(email,password)
        :await signUp(email,password);

      if(r.error)throw r.error;

      setMessage(
        mode==="signin"
          ?"Signed in successfully"
          :"Account created. Check your email if confirmation is enabled."
      );
    }catch(err){
      setMessage(err.message);
    }
  };

  return (
    <section className="auth">
      <h2>{mode==="signin"?"Sign in":"Create account"}</h2>

      <form onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          required
        />

        <button>
          {mode==="signin"?"Sign in":"Create account"}
        </button>
      </form>

      <p>{message}</p>

      <button onClick={()=>setMode(mode==="signin"?"signup":"signin")}>
        {mode==="signin"?"Create a new account":"Already have an account?"}
      </button>
    </section>
  );
}