import axios from 'axios'

async function userData() {
  await new Promise((r) => setTimeout(r , 1000))
  const response = await axios.get("http://localhost:3000/api/user")
  // console.log(response.data)
  return response.data;
}

// async component ==>
export default async function Home() {
  const user = await userData()

  return (
    <div className='flex justify-center text-center'>
      <div className='border p-3'>
        <h5>{user.name}</h5>
        <h5>{user.anime}</h5>
      </div>
    </div>
  );
}
