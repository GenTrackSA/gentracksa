WITH created AS (
  SELECT
    DATE_TRUNC('month', w.created_at) AS created_month,
    w.msa,
    w.id AS workplace_id,
    w.name AS workplace_name,
    w.created_at
  FROM DBT_PRODUCTION_CORE.DIM_WORKPLACES w
  WHERE
    w.type = 'Dental Clinic'
    AND w.created_at >= '2025-01-01'::timestamp_ntz
    AND w.msa = 'Boston-Cambridge-Newton, MA-NH'
),

activated AS (
  SELECT
    DATE_TRUNC('month', h.activation_month) AS activation_month,
    h.msa,
    h.workplace_id,
    h.activation_month
  FROM DBT_PRODUCTION.HCF_FIRST_LAST_VERIFIED h
  WHERE
    h.activation_month >= '2025-01-01'::timestamp_ntz
    AND h.msa = 'Boston-Cambridge-Newton, MA-NH'
)

SELECT
  c.created_month,
  c.msa,
  c.workplace_id,
  c.workplace_name,
  c.created_at,
  a.activation_month,
  a.activation_month IS NOT NULL AS activated
FROM created c
LEFT JOIN activated a
  ON c.workplace_id = a.workplace_id
ORDER BY c.created_at DESC;
