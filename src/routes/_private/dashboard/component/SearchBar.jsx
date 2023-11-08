import Button from "@/components/Button.jsx";

export default function SearchBar({ handleSubmit, handleInputChange, state }) {
  return (
    <>
      <div className=" mx-auto w-5/6 justify-center mt-5">
        <div className="flex rounded-lg border-2 border-stone-200/30 shadow-sm bg-stone-50 justify-around">
          <form
            autoComplete="on"
            method="Post"
            onSubmit={handleSubmit}
            className="max-lg:flex-col max-lg:space-y-2 lg:flex lg:space-x-2 p-2"
          >
            <input
              className="input"
              type="text"
              name="application"
              placeholder="application"
              value={state.application}
              onChange={handleInputChange}
            />
            <input
              className="input"
              type="text"
              name="profile"
              placeholder="profile"
              value={state.profile}
              onChange={handleInputChange}
            />
            <input
              className="input"
              type="text"
              name="label"
              placeholder="label"
              value={state.label}
              onChange={handleInputChange}
            />
            <Button type="submit">Fetch Configs</Button>
          </form>
        </div>
      </div>
    </>
  );
}
