
export function PlayerForm({ player, onSubmit }) {
    
    return (
        <form onSubmit={() => onSubmit(player.evt.target)}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" />
            <label htmlFor="breed">Breed:</label>
            <input type="text" name="breed" />
            <button type="submit">Add Player</button>
        </form>
    );

}