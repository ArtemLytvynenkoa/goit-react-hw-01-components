import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Statistics({statisticsData}) {
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>Upload stats</h2>

            <ul className={s.stat_list}>
                {
                    statisticsData.map(({ id, label, percentage }) => (
                        <li className={s.item} key={id}>
                            <span className={s.label}>{label}</span>
                            <span className={s.percentage}>{percentage}%</span>
                        </li> 
                    ))
                }
               
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    statisticsData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}

export default Statistics;