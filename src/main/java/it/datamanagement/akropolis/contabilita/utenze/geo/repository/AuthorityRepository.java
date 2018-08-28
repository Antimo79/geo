package it.datamanagement.akropolis.contabilita.utenze.geo.repository;

import it.datamanagement.akropolis.contabilita.utenze.geo.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
