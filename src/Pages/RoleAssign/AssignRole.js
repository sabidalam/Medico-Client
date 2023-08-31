import React, { useEffect, useState } from "react"
import axios from "axios"
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton"
import { toast } from "react-hot-toast"

const AssignRole = () => {
  // const [userId, setUserId] = useState("")
  // const [newRole, setNewRole] = useState("")

  // const handleUserIdChange = (e) => {
  //   setUserId(e.target.value)
  // }

  // const handleNewRoleChange = (e) => {
  //   setNewRole(e.target.value)
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   try {
  //     const response = await axios.post("http://localhost:5000/assign-role", {
  //       userId,
  //       newRole,
  //     })
  //     console.log("Role assigned successfully!", response.data)
  //     toast.success("Role assigned successfully!")
  //     // Clear th e form inputs after successful submission
  //     setUserId("")
  //     setNewRole("")
  //   } catch (error) {
  //     console.error("Failed to assign role!", error)
  //   }
  // }



  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await axios.get("http://localhost:5000/users")
      setLoading(false)
      setUsers(response?.data)
    } catch (error) {
      console.error("Error fetching users:", error)
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  const ActionOptions = ["user", "superAdmin"]
  const [selectedAction, setSelectedAction] = useState({})
  const handleActionSelect = (userId, action) => {
    setSelectedAction((prevState) => ({
      ...prevState,
      [userId]: action,
    }))
  }

  const executeAction = async (userId) => {
    const selected = selectedAction[userId]
    if (selected) {
      try {
        const response = await axios.put("http://localhost:5000/assign-role", {
          _id: userId,
          role: selected,
        })
        console.log(
          `Successfully executed action '${selected}' for user ${userId}`
        )
        console.log("Updated user:", response.data)
        fetchUsers()
        toast.success("Role Updated Successfully")
      } catch (error) {
        console.error(`Error executing action for user ${userId}:`, error)
      }
    } else {
      console.log("No action selected")
    }
  }

  return (
    <div className='my-8 max-w-5xl mx-auto px-2'>
      <h2 className="text-4xl font-semibold mb-3 text-center">All User</h2>
      {/* <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 shadow-primary"
      >
        <div className="mb-4">
          <label htmlFor="userId" className="text-lg font-medium">
            User ID:
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={handleUserIdChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newRole" className="text-lg font-medium">
            New Role:
          </label>
          <select
            id="newRole"
            value={newRole}
            onChange={handleNewRoleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="superAdmin">Super Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <PrimaryButton
          type={`submit`}
          classes={`h-12 btn-sm normal-case hover:scale-105 duration-500`}
        >
          Assign Role
        </PrimaryButton>
      </form> */}

      <div className="overflow-x-auto">
        <table className="w-full bg-[#91fae5] rounded-lg overflow-hidden">
          <thead className='text-black'>
            <tr className='bg-primary'>
              <th className='py-5'></th>
              <th className='py-5'>FirstName</th >
              <th className='py-5'>LastName</th >
              <th className='py-5'>Email</th >
              <th className='py-5'>Role</th >
              <th className='py-5 pr-20'>Assign Role</th >
            </tr>
          </thead>
          <tbody className='text-center text-black'>
            {users.map((user, i) => (
              <tr key={user._id} className='hover:bg-primary rounded-xl cursor-pointer duration-300' style={{ 'border-top': '1px solid #28ebc4' }}>
                <th className='p-5'>{i + 1}</th >
                <td className='py-4'>{user.firstName}</td>
                <td className='px-2'>{user.lastName}</td>
                <td>{user.email}</td>
                <td className='px-2'>{user.role}</td>
                <td className="py-2 pl-16">
                  <div className="flex items-center">
                    <select
                      className="p-2 mr-2 border rounded"
                      value={selectedAction[user._id]}
                      onChange={(e) =>
                        handleActionSelect(user._id, e.target.value)
                      }
                    >
                      <option value="Change Role">Change Role</option>
                      {ActionOptions.map((action) => (
                        <option key={action} value={action}>
                          {action}
                        </option>
                      ))}
                    </select>

                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      onClick={() => executeAction(user._id)}
                    >
                      Execute
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default AssignRole;
