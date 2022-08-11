package com.team42ETSE.Hack_for_good.dao;

import com.team42ETSE.Hack_for_good.model.Beaches;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class BeachJdbcDao implements BeachDao {

    private final JdbcTemplate jdbcTemplate;

    public BeachJdbcDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Beaches> getBeaches() {
        List<Beaches> beaches = new ArrayList<>();
        String sql = "SELECT * FROM beaches;";
        SqlRowSet sqlRowSet = jdbcTemplate.queryForRowSet(sql);
        while(sqlRowSet.next()){
            beaches.add(mapRowSetToBeach(sqlRowSet));
        }
        return beaches;
    }


    private Beaches mapRowSetToBeach(SqlRowSet sqlRowSet) {
        Beaches beach = new Beaches();
        beach.setBeach_id(sqlRowSet.getInt("beach_id"));
        beach.setImg_link(sqlRowSet.getString("img_link"));
        beach.setBeach_name(sqlRowSet.getString("beach_name"));
        beach.setLocation(sqlRowSet.getString("location"));

        return beach;
    }
}
