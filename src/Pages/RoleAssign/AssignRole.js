import React, { useState } from "react"
import axios from "axios"
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton"

const AssignRole = () => {
  const [userId, setUserId] = useState("")
  const [newRole, setNewRole] = useState("")

  const handleUserIdChange = (e) => {
    setUserId(e.target.value)
  }

  const handleNewRoleChange = (e) => {
    setNewRole(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:5000/assign-role", {
        userId,
        newRole,
      })
      console.log("Role assigned successfully!", response.data)

      // Clear the form inputs after successful submission
      setUserId("")
      setNewRole("")
    } catch (error) {
      console.error("Failed to assign role!", error)
    }
  }

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-4xl font-semibold mb-3 text-center">Assign Role</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6"
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
      </form>
    </div>
  )
}

export default AssignRole
