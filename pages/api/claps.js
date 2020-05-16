import db from '../../lib/db';

const incrementClaps = async (req, res) => {
    if ((!req.query.id) || (!req.query.increment)) {
        return res.status(400).json({
          error: 'Missing query parameter'
        });
      }
    const ref = db.ref('claps').child(req.query.id);
    const { snapshot } = await ref.transaction((currentClaps) => {
        return Number(req.query.increment)===1?(currentClaps + 1):currentClaps;
    });
    return res.status(200).json({
        total: snapshot.val()
});
};

export default incrementClaps;