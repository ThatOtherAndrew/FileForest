from pathlib import Path
from shutil import rmtree

from fastapi import APIRouter, Response, HTTPException

router = APIRouter(prefix='/branches')
files = Path('files')


@router.post('/', status_code=201)
def create(branch_id: str):
    branch = files / branch_id
    if branch.is_dir():
        raise HTTPException(409, 'The specified branch ID already exists')

    branch.mkdir()
    return Response()


@router.get('/{branch_id}')
def read(branch_id: str):
    branch = files / branch_id
    if not branch.is_dir():
        raise HTTPException(404, 'The specified branch ID does not exist')

    return branch.iterdir()


@router.put('/{branch_id}', status_code=204)
def update(branch_id: str, new_id: str):
    branch = files / branch_id
    if not branch.is_dir():
        raise HTTPException(404, 'The specified branch ID does not exist')

    branch.rename(files / new_id)
    return Response()


@router.delete('/{id}')
def delete(branch_id: str):
    branch = files / branch_id
    if not branch.is_dir():
        raise HTTPException(404, 'The specified branch ID does not exist')

    rmtree(branch)
    return Response()
