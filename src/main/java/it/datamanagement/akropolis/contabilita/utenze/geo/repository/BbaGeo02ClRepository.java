package it.datamanagement.akropolis.contabilita.utenze.geo.repository;

import it.datamanagement.akropolis.contabilita.utenze.geo.domain.BbaGeo02Cl;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the BbaGeo02Cl entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BbaGeo02ClRepository extends JpaRepository<BbaGeo02Cl, Long> {

}