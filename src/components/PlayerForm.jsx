
export function PlayerForm({ handleSubmit }) {
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" />
            <label htmlFor="breed">Breed:</label>
            <input type="text" name="breed" />
            <button type="submit">Add Player</button>
        </form>
    );

}